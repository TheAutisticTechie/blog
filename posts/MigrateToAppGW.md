---
title: Migrating to Azure Application Gateway WAF
description: The process of migrating from Legacy WAF to Azure App Gateway WAF
date: 2021-10-30
draft: true
tags:
    - Azure
    - WAF
    - Firewall
layout: layouts/post.njk
---

The Web Application Firewall solution in place was coming up for renewal at a significantly higher price than previous renewals, we had constant struggles with actioning policy changes, and deploying code to the backend servers. After taking a look at a few options such as Front Door, Cloudflare and F5 for the environment, the Azure Application Gateway WAFv2 came out on top due to the applications and the environment in use which I will go into briefly before continuing with the migration steps.

## Environment

It's currently running in an IaaS environment on Azure. The environment is split into two applications, each application having 2 IIS servers and 2 SQL Servers that are in failover with a load balancer, and a CMS server connecting into one of the applications for image upload processing.  One application is a single domain site, whilst the other is for 100 domains which serves the content for the domain based on the hostname hitting the server.

As you can see in the below-left diagram, we have 2 WAFs which connect to both applications, and both WAFs were functioning in Active-Active failover so was load balancing between each other. The issue we had with deployments was the way these did this failover. When stopping a pool for deployment it would fail over which took the applications offline for around 30-60 seconds. The applications get a few thousand visitors an hour, so whilst its not a huge amount, it makes it noticeable and makes us look bad. The proposed change to the Application Gateway resolves this issue as the gateway itself **is** the load balancer **and** the WAF in a single product.

### WAF Diagrams

| Old WAF Setup | Proposed WAF Setup |
|---|---|
| ![network diagram showing 2 WAFs connecting to 2 applications which each connected to 2 SQL servers though a load balancer](/img/Old-WAF-IaaS.png) | ![network diagram showing one application gateway WAF connecting to 2 applications which each connected to 2 SQL servers though a load balancer](/img/New-WAF-IaaS.png) |

## Training

The first thing I needed to do was learn how to deploy and maintain the gateway and the WAF rules. There were a lot of questions I had to answer before presenting proposals to management. Will it work with so many domains? How do we see logs? How would we do a deployment with it? How is it billed? What if it goes down?

I began by logging into our Visual Studio Enterprise subscription on Azure and deploying a Server 2019 VM running IIS and creating a little single page site with a load of Lorem Ipsum and a lot of external scripts and stylesheets being called so that there was a decent amount of traffic. I then deployed the Application Gateway, making a note of every screen and the names I was entering for everything it was asking so I could correctly name things on the production deployment.

## Proof of Concept

Would it even work with our applications?

## Migration Plan

Now that I knew it would work, I

## The Migration

As you'd expect, everything went swimmingly thanks to the extensive planning that was put into it! I'll go into detail on how I migrated and how I configured the Application Gateway and WAF rules with minimal downtime.

### IP Tier Upgrade
