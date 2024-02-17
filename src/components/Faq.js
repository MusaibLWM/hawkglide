// Faq.js

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <>
    <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                What is Hawk Glide?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                How does Hawk Glide work?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                Hawk Glide suitable for agencies managing multiple clients?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                What social media platforms does Hawk Glide support?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                How does Hawk Glide ensure the security of my data?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="6">
                <Accordion.Header className="font-face-gb-semibold faq-bg-color rounded-4 m-2">
                Can I try Hawk Glide before committing to a subscription?{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                  Hawk Glide is an AI-powered social media management platform designed to streamline your workflow, from content creation to scheduling and posting.{' '}
                  </p>
                </Accordion.Body>
              </Accordion.Item>

    </Accordion>
    </>
  );
};

export default Faq;
