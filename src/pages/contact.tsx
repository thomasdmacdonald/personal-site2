import React from 'react';

import { type NextPage } from 'next';
import {
  EnvelopeIcon,
} from '@heroicons/react/24/solid';

import PageHeader from '~/components/text/PageHeader';
import IconButton from '~/components/buttons/IconButton';

const Contact: NextPage = () => (
  <div style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
    <PageHeader>Contact</PageHeader>
    <p className="mb-10">
      Let me know if you&apos;d like to chat sometime!
      You can press the email button below to get in contact.
    </p>
    <div className="flex flex-row gap-4">
      <IconButton Icon={EnvelopeIcon} onClick={() => window.open('mailto:tdmac1999@gmail.com')} />
    </div>
  </div>
);

export default Contact;
