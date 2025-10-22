---
author: maloymanna
comments: true
date: 2025-10-22
layout: post
slug: automate-keepass-sync-on-linux-to-google-drive-and-onedrive
title: "Automate KeePass sync on Linux to Google Drive and OneDrive"
layout: post
description: "Automate KeePass sync on Linux to Google Drive and OneDrive"
categories:
- linux, security
tags:
- linux, security, productivity
---
Neither Google nor Microsoft provide native Linux clients for their popular online storage systmes: Google Drive and OneDrive. This is expected as Linux is not mainstream in the consumer space, even though it's huge in the server space on both Google Cloud Platform or Azure Cloud, as well as Amazon Web Services.  
The Linux world is not short of alternatives, and several unofficial clients are available on the internet/ Github to be used to setup synchronization and backup to these cloud drives. 
Examples of some alternatives Linux clients: 
- Google Drive: [KIO GDrive](https://community.kde.org/KIO_GDrive), [Drive](https://github.com/odeke-em/drive)  
- OneDrive:  [A client](https://github.com/abraunegg/onedrive), [A GUI](https://github.com/bpozdena/OneDriveGUI)  

**Why KeePass?**
While the setup of these tools is straightforward, using unauthenticated github repositories comes with its own security risks e.g. malware or data exfiltration.
For discerning users, one particular interesting case is the backup of password files to cloud drives. Such users have already discounted options like:  
| Option | Risk / Disadvantage |
|--------|:---------------------|
| Online password managers | Privacy and security aren't as reliable as Big Tech, hack stories abound  |
| Browser's in-built password manager | High possibility of leakage during multi-tasking, at risk from rogue extensions |  

One of the safer options is to use a trusted offline password manager like KeePass. That still leaves the problem of having access to it across your devices like mobiles and computers, with the latest updated passwords. And hence the required backup to cloud drives.

**Scripting the solution**
A simple solution to automate the sync involves 3 steps:
1. Use `inotifywait` to watch for KeePass file changes/updates (e.g. new password creation/updates/renewals)
2. Use [`rclone`](https://rclone.org/) to sync to cloud drives
3. A simple bash script to tie it all together

**Step 1 - install the tools**
On a Ubuntu based distro, I used:
```
sudo apt update
sudo apt install inotify-tools rclone -y
```

**Step 2 - configure rclone for Google Drive and OneDrive**
***Google Drive***
- Run `rclone config`
- Select `n` for new remote
- Give a name `googledrive`
- Select `drive` for Google Drive [Option 22 for rclone 1.71.2]
- Follow OAuth steps in browser to authenticate
- Select Advanced Options to scope rclone access with least privilege. e.g. to restrict rclone to a specific folder hierarchy, set the `root_folder_id`. So if the folder you want rclone to use has a URL which looks like `https://drive.google.com/drive/folders/1XyfxxxxxxxxxxxxxxxxxxxxxxxxxKHCh` in the browser, then you use `1XyfxxxxxxxxxxxxxxxxxxxxxxxxxKHCh` as the `root_folder_id` in the config.

***OneDrive***
While testing I found the same process failed for OneDrive, when using rclone version < 1.62.
The process works differently for OneDrive because Microsoft uses different authentication scopes for read vs write operations. I also found that rclone doesn't have fine-grained scopes for OneDrive.
- Force a clean flow using `rclone authorize "onedrive"`
- This prints a message to check redirect URL is set correctly to `http://localhost:53682` and `Waiting for code...`
- The browser is opened to Microsoft login and consent page: `https://account.live.com/Consent/Update...`
- After allowing access, a JSON access token is printed out on the screen `{"access_token":..."expires_in":3599}`
- Copy and keep this token text
- Run `rclone config` as for Google Drive, but do not use auto config
- When prompted to paste the result of `rclone authorize "onedrive"`, paste the JSON access token from the previous step
- This would ensure the right scopes are applied for rclone to authenticate for the file sync (Step 3 script).

**Step 3**
- See sample bash script
- Make the script executable `chmod +x ~/sync-keepass.sh`
- Add the script to `~/.bashrc` or `~/.profile` and/or add to Autostart/ systemd user service.
- Each update and save to the KeePass file triggers a [close_write](https://linux.die.net/man/1/inotifywait) event, and the script uses rclone to upload it to both cloud drives.
-

