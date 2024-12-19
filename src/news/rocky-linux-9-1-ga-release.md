---
title: Rocky Linux 9.1 Available Now
date: '2022-11-26'
description: 'We are pleased to announce the general availability of Rocky Linux 9.1. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 9.1. This release is currently available for the x86-64, aarch64, ppc64le, and s390x architectures. Please review the release notes in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/9_1) - These notes contain important information including known bugs and more comprehensive details about changes in this version.

## Highlights

### Testing

Rocky Linux releases are put through thorough testing to ensure correctness and stability. Testing consists of hundreds of manual and automated checks covering all manner of environments and configurations.

Rocky Linux 9.1 was subjected to over 9 days of testing before receiving the team's approval. Testing logs, discussion, and the release checklist can be viewed [here](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v91).

We encourage users interested in the process to join the team on [chat.rockylinux.org](https://chat.rockylinux.org/rocky-linux/channels/testing).

### Notable Changes

- [Keylime](https://keylime.dev/), a remote boot attestation and runtime integrity management solution using Trusted Platform Modules (TPMs) is now available.
- New module stream versions include node.js 18, php:8.1, maven:3.8, and ruby:3.1.
- New compiler toolset versions include GCC 12, LLVM 14.0.6, Rust 1.62, and Go 1.18.

### Cloud Images

- Container images are now available for all x86-64, aarch64, ppc64le, and s390x.
- Vagrant images are now available for x86-64 and aarch64
- Official Rocky Linux images are now available on Oracle Cloud Platform.
- LVM variants of the generic, EC2, and Azure images are now available.

## Upgrades and Conversions

Current users of Rocky Linux 9 can upgrade to 9.1 via `dnf update` or via PackageKit and it's interfaces (GNOME Software, etc).

Users of other Enterprise Linux 9 distributions can upgrade and convert to Rocky Linux 9.1 via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/blob/main/migrate2rocky/migrate2rocky9.sh) conversion script.

## Thanks

We are forever grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release. We are thankful for our [sponsors](/sponsors) and [partners](/partners) who provide the resources to build, test, and produce Rocky.

We would like to thank the following individuals in particular for their contributions to this release:

- Adam Augustine
- Al Bowles
- Alan Marshall
- Boris Reisig
- Brian Clemens
- Chris Stackpole
- David Roth
- Ezequiel Bruni
- Ian Walker
- Louis Abel
- Lukas Magauer
- Mustafa Gezen
- Neil Hanlon
- Rich Alloway
- Sherif Nagy
- Skip Grube
- Steven Spencer
- Taylor Goodwill
- Trevor Cooper

We are thankful for the upstream development work in Fedora Linux, the curation efforts in CentOS Stream, and the countless developers and projects from which these distributions are built.
