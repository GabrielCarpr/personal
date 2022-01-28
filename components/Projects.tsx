import React from "react";
import { Column } from "./layout/Column";
import { Padding } from "./layout/Padding";
import { Project } from "./Project";
import { Text } from "./Text";

export const Projects = () => {
  return (
    <Column>
      <Padding>
        <Text level="h2">Projects</Text>
      </Padding>

      <Project
        name="Leadflo"
        image="leadflo"
        lead="Leadflo is a CRM for dental practices that helps dentists, nurses, and receptionists convert enquiries into high-value patients by organising and automating patient communications across multiple channels."
        priority
      >
        <Text>
          When I started working on Leadflo, it was a very rough MVP with
          mountains of technical debt. It’s now a fully-fledged product with
          fast development and growth.
        </Text>
        <Text>
          Recently, I designed and led the implementation of its most ambitious
          feature, an automation engine, and delivered it way ahead of schedule.
        </Text>
        <Text>
          Leadflo is written in PHP and Typescript using Laravel and React,
          built by CircleCI into Docker containers, deployed by Terraform,
          running on ECS, monitored by Prometheus, Alertmanager, and Grafana,
          and uses PostgreSQL.
        </Text>
      </Project>

      <Project
        name="Monzo-YNAB"
        github="https://github.com/gabrielcarpr/monzo-ynab"
        lead="Monzo-YNAB is a simple utility I built for myself that registers and receives webhooks from my Monzo bank account, and converts and records it within YNAB, a budgeting app."
      >
        <Text>
          It’s been successfully running for over a year, processed thousands of
          transactions, and has had no bugs.
        </Text>
        <Text>Monzo-YNAB is built in Go and runs on Kubernetes.</Text>
      </Project>

      <Project
        name="Dental Support Forum"
        lead="I worked on a dental training and support platform used by thousands of dentists across the world. The platform includes a support forum where dentists can get advice on their cases."
        image="forum"
      >
        <Text>
          Previously dentists would pay for their cases at the point of
          submission, but the business wanted to also obtain large corporate
          clients who would pay for their dentist’s cases monthly. The existing
          payments system was brittle and inflexible and would not easily
          support this.
        </Text>

        <Text>
          I redesigned and reimplemented the new backend payments system,
          integrating Stripe and Paypal, and oversaw the implementation on the
          frontend, delivering the project on schedule. I designed the payments
          system to be easily extendable using the strategy pattern.
        </Text>

        <Text>
          To date, my payments system has processed thousands of payments and
          has been successfully extended numerous times by other developers to
          support different payment models, such as credits.
        </Text>

        <Text>
          The Support Forum is built in Typescript using Express and React, is
          deployed by Ansible onto EC2 instances and uses MongoDB.
        </Text>
      </Project>

      <Project
        name="CQRS"
        github="https://github.com/gabrielcarpr/cqrs"
        lead="CQRS is a lightweight extendable backend framework built in Go centered around a command, event, and query bus."
      >
        <Text>
          Using code generation and packages for authentication, queued commands
          and events, REST, CLI, HTML or GraphQL interfaces, I can use CQRS to
          quickly start a new backend project where I won’t have to spend time
          further down the road improving architecture or scalability.
        </Text>
      </Project>
    </Column>
  );
};
