---
title: Troubleshooting
description: Troubleshooting FedEx Ship Manager
---

## Shipments reports missing data?

The "Hourly Upload File"(s) generated by FedEx Ship Manager are not being uploaded to FedEx.

FedEx says that this is a known issue, and they plan to have it fixed by Q3 2021.

Temporary fix:

- Move all `.HUF` files from `C:\ProgramData\FedEx\FSM\Temp` to `C:\ProgramData\FedEx\FSM\Temp\Upload`
- In FedEx Ship Manager, go to `Utilites`, open the `Upload` menu, select all available options, and click "OK"

## Snippets

```powershell
# Communication tester
gsmcommsetup -cafeinstall
```

```powershell
# Restart processes?
fedexsvcmanager /see
```