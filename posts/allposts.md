---
title: All Posts
description: All Posts
date: 2021-10-31
draft: true
tags:
    - Azure
    - WAF
    - Firewall
layout: layouts/post.njk
---

Stadium Network Replacement
I designed, planned, and implemented the replacement of a 36-switch network and migration to new VLANs on a live network with minimal downtime. Due to cost limitations on the project, I chose the Dell S Series for the 2 core switches and the Dell N2048P switch for endpoints. The cores were at either side of the stadium in a VLT Peer Routed Domain and all VLANs were setup with VRRP.



SAN Migration
I had to install and configure a SAN for a national customer at their head office. Rack mounting the SAN in the cab and connecting it to the server using a fibre channel. Migrate shared files from the SBS onto a new VM acting as a file server which connected to the datastore hosted on the SAN and then scripted the remapping of the shared drives for the 100 computers they had with no issues to date.



Mass Windows 10 Upgrades
I was responsible for assisting and supporting a Windows 10 upgrade of an accountancy firm with roughly 20 PCs. Running through the steps with the Technical and Managing Director and showing them the troubleshooting steps to take if anything should go wrong.



Dental System Migration
I was responsible for the migration from one software provider to another from start to finish.

New RAID 10 array on SAS drives configured through SSH with ESXi CLI tools
Installation of a new Server 2008 R2 server to host the database
Android tablets for all the surgeries to deal with customer data and charting
New Wi-Fi network for the tablets to connect to the server with 5 UniFi APs
﻿


Dental System Migration
I was responsible for the migration from one software provider to another from start to finish.

New RAID 10 array on SAS drives configured through SSH with ESXi CLI tools
Installation of a new Server 2008 R2 server to host the database
Android tablets for all the surgeries to deal with customer data and charting
New Wi-Fi network for the tablets to connect to the server with 5 UniFi APs
﻿



Fraud Investigation
At a very renowned company I was called by the director one evening about an urgent issue involving their IT Manager. He had been suspended pending investigation for fraud and gross misconduct. I went the next morning to a meeting with the head of HR and accounts who showed me all the tender documents and purchase orders. The IT Assistant was AWOL until 16:30, we were due to meet with him at 11am. He walked us around the 2 main cabs with servers in and he made me a domain admin account. I immediately secured the site and disabled all spurious accounts with HR. I then began the long process of documenting every piece of kit in every cab room to tally it against the purchase orders. I was asked to join the disciplinary hearing with the IT Manager to combat his jargon which he tried and failed to do. The investigation is still ongoing with the police.



Large School Migration to vSphere
This project entailed of migrating a school’s physical servers into a cluster of three Dell physical servers running VMware vSphere 6 connected into two Dell SANs, new domain controllers and a file server. The main priority was speed and redundancy as all the students will be logging in and accessing files at the same time every lesson. The project took 24 days to complete from start to end due to the migration of data from the old servers being the chokepoint and due to issues, which arose during the works.


Cyber Essentials Plus with Intune
I’m very proud to have implemented Cyber Essentials Plus in a completely serverless environment. I migrated Jupiter IT’s domain and storage to Azure AD and SharePoint/OneDrive and set up Intune to manage the devices in place of group policy. Once all computers were connected to Azure AD and could see the test policies, I began the process of hardening the builds and setting up the Update Rings.

Next, I had to secure the website which is hosted in a datacentre we rent rack space with (Node4). This part is relatively straightforward: Configure HSTS, minimum TLS, force all requests to be HTTPS and restrict web server access ports, MFA for all accounts.

After securing the website we secure all boundary firewalls, Jupiter IT have 2 – Head Office and Datacentre. The datacentre one gets touched on in the web section however we have other services within the DC such as our backup solution mentioned above. We whitelist all ports except ICMP and HTTP/S. SSH, DNS etc. Are all restricted to specific IPs on the internet to ensure its as secure as possible. All ports and URLs are documented in a spreadsheet I designed

 I booked in the penetration test and the onsite audit with our provider Perspective Risk. They were concerned about the serverless aspect as they have never come across one before and haven’t seen any other providers mentioning it in their forums. The penetration test passed with only a few action points which were due to the website developer missing a header in the PHP on WordPress. The onsite audit only took half a day instead of their usual full day. We had a few hiccups as we expected but these were due to the way Intune handles local accounts. We deployed a script to create and set a password through PowerShell and once this happened, we passed the audit.


Veeam Cloud Connect
When I started with Jupiter IT, the backup systems being used (Local: BackupAssist and Windows Backup. Cloud: SolarWinds Backup) were insufficient to our needs. They were regularly failing across all customers and costing a fortune to both the customers and to Jupiter, not just in time to fix but also in the licenses too. I began the process of planning a change to Veeam overall. I met with the directors and showcased Veeam and my project plan to change the local backup software to a single provider instead of multiple. The directors all agreed so I then I spoke with all customers and explained the change and the reasons we chose Veeam.

We joined Veeam on the service provider channel as this is billed monthly and isn’t static on license use. We can go up and down as needed. After finishing the rollout, I began researching the cloud backup functionality of the software so that we could have a single backup software for both onsite and offsite. After a conversation with our account manager I began searching for all the information I could find in the forums about Veeam Cloud Connect. I found the common issues people have with their infrastructure and the best practices for the whole environment. I liaised with Dell and priced up a physical host and storage for it. 100TB DAS to start with and then easily double with another stack. I created a cost benefit analysis of what we charge customers versus license cost of the current system and then an analysis of this system. As expected, it saved thousands for the company and enabled us to reduce pricing drastically for the customers.

After a few months we made the money back from the initial outlay for the server, storage, firewall etc. so we then moved the server into a datacentre run by Node4. We rented a full rack and when it was ready scheduled the downtime in with the customers. This wasn’t all that simple as we had other services now running on the server such as WHM for websites and a UniFi controller. I expected downtime to be about 5 hours due to the drive and initial unload, so we had to create some page rules on our Cloudflare account to ensure all customers websites were fully cached. After getting the server up and running again in the datacentre we updated the DNS records, and everything came back online. After another year or so the plan is to install another physical server and DAS unit and start utilising the Veeam Cloud Connect Replication which will further improve the Disaster Recovery provided to clients.
