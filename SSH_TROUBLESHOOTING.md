# SSH Authentication Fix for GitHub

## Problem

When running `git push`, the following error occurred:

```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

## Root Cause

The SSH key existed on the system (`~/.ssh/id_ed25519_tnahsin79`) but was **not loaded into the SSH agent**. GitHub couldn't authenticate because no key was being presented during the SSH handshake.

## Diagnosis Commands

### 1. Check existing SSH keys

```bash
ls -la ~/.ssh
```

**Result:** Found several SSH keys including `id_ed25519_tnahsin79` and `id_ed25519_tnahsin79.pub`

### 2. Test SSH connection to GitHub

```bash
ssh -T git@github.com
```

**Result:** `Permission denied (publickey)` - confirming authentication failure

### 3. Check if any keys are loaded in SSH agent

```bash
ssh-add -l
```

**Result:** `The agent has no identities.` - **This was the problem!**

## Solution

### Add the SSH key to the agent

```bash
ssh-add ~/.ssh/id_ed25519_tnahsin79
```

**Result:** `Identity added: /Users/user/.ssh/id_ed25519_tnahsin79 (Tnahsin79)`

### Verify authentication works

```bash
ssh -T git@github.com
```

**Result:** `Hi Tnahsin79! You've successfully authenticated, but GitHub does not provide shell access.` ✅

## Making it Permanent (Optional)

To avoid running `ssh-add` after every restart, create an SSH config file:

```bash
cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_tnahsin79
  AddKeysToAgent yes
EOF

chmod 600 ~/.ssh/config
```

This tells SSH to:
- Automatically use the correct key for `github.com`
- Add the key to the agent when first used

## Summary

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `ls -la ~/.ssh` | Check if SSH keys exist |
| 2 | `ssh -T git@github.com` | Test GitHub authentication |
| 3 | `ssh-add -l` | Check loaded keys in agent |
| 4 | `ssh-add ~/.ssh/id_ed25519_tnahsin79` | **Fix:** Load the key |
| 5 | `ssh -T git@github.com` | Verify fix worked |

---

*Document created: December 28, 2025*


