# Git Workflow

Git workflow for this ~~Learning Directory~~ Portfolio Website repo.

~~For information on Git workflow in general, see the [git_workflow/](../Git/git_workflow/) directory in the Git/ directory.~~

1. git checkout `<branch>`

   `git checkout <branch> && git status`

2. Push changes from the `<branch>` branch to the origin/`<branch>` branch.

   `git push && git status`

3. Make copy of `<branch>` branch (`<branch_backup>`).

   `git branch`

   `git branch -d `<branch_backup>`&& git branch -c`<branch>` `<branch_backup>` && git branch`

4. git checkout ~~master~~ parent

   `git checkout master && git status`

5. Make copy of master branch (master_backup).

   `git branch -d master_backup && git branch -c master master_backup && git branch`

6. Pull changes from origin/master to master branch.

   `git pull origin master && git status`

7. Make copy of master branch after pull (master_backup_after_pull).

   `git branch -d master_backup_after_pull && git branch -c master master_backup_after_pull && git branch`

8. git checkout dev

   `git checkout dev && git status`

<!-- TODO: Figure out which is better for this repo at this step. Rebase or merge. See https://github.com/JamieBort/Learning-Directory/issues/252 -->

9. [Merge master into dev.](https://gist.github.com/calaway/ea880263b0c0495bb00ee877f001dc59)

   `git merge master && git status`

   [or rebase master into dev](https://gwu-libraries.github.io/Git.html)

   `git rebase master && git status`

10. Resolve merge conflicts.

11. Push changes from the dev branch to the origin/dev branch.

    `git push && git status`

12. git checkout master

    `git checkout master && git status`

13. Merge dev into master.

    `git merge dev && git status`

14. Checkout the dev branch

    `git checkout dev && git status`

15. Delete all copies of dev and master branches.
