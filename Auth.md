## Debug Repo Access (Deployed)

How to Authenticate Github In EC2 Instance 

1. Edit the git config file
    - `vi ~/.gitconfig`

2. Add the following to the file and save.
    `[url "git@github.com:"]
        insteadOf = https://github.com/`

3. Check SSH Agent
    - eval $(ssh-agent -s)

4. Check whether Authentication works by running the following in the Ubuntu instance. 
    - `ssh -T git@github.com`

5. Run one of the folling commands to generte an SSH key: 
    - `ssh-keygen -t rsa` OR `ssh-keygen -t ed25519` 

6. Change permissions for the generated Key:
    - `chmod 400 <path to your key>`

7. Add SSH Access Token to Github, via this link: *[Github SSH Keys](https://github.com/settings/keys)* 
    - You can run `cat <filepath>` to copy the key for pasting into github. It should be the public file (.pub file extension) 
    - __Example Key__: *ssh-ed25519 AAAAC...<more characters> ubuntu@ip-123-45-67-890*

8. Run the following terminal command to authenticate yourself. (dont forget to add the key to Github)

    - `ssh-add ~/.ssh/ed25519.pub` 

9. Confirm it worked by running the following: 
    - `ssh -T git@github.com`

    The output should look something like this:

    *Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.*
    *Hi < username >! You've successfully authenticated, but GitHub does not provide shell access.*

    - `git pull origin main` 

10. You can now create branches, push and pull from the deployed instance like you would locally.