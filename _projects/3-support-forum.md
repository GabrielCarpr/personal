---
name: Dental Support Forum
image: forum
lead: I worked on a dental training and support platform used by thousands of dentists across the world. The platform includes a support forum where dentists can get advice on their cases.
---

Previously dentists would pay for their cases at the point of submission, but the business wanted to also obtain large corporate clients who would pay for their dentist’s cases monthly. The existing payments system was brittle and inflexible and would not easily support this.

I redesigned and reimplemented the new backend payments system, integrating Stripe and Paypal, and oversaw the implementation on the frontend, delivering the project on schedule. I designed the payments system to be easily extendable using the strategy pattern.

To date, my payments system has processed thousands of payments and has been successfully extended numerous times by other developers to support different payment models, such as credits.

The forum is built in **Typescript** using **Express** and **React**, is deployed by **Ansible** onto **EC2** instances and uses **MongoDB**.
