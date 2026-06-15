import React from 'react';
import AccordionItem from './AccordionItem';

const topics = [
  {
    id: 'account-opening', icon: 'bi-plus-circle', label: 'Account Opening',
    links: [
      'Resident individual',
      'Minor',
      'Non Resident Indian (NRI)',
      'Company, Partnership, HUF and LLP',
      'Glossary']
  },
  {
    id: 'zerodha-account', icon: 'bi-person-circle', label: 'Your Zerodha Account',
    links: [
      'Your Profile',
      'Account modification',
      'Client Master Report (CMR) and Depository Participant (DP)',
      'Nomination',
      'Transfer and conversion of securities'
    ]
  },
  {
    id: 'kite', icon: 'bi-arrow-repeat', label: 'Kite',
    links: [
      'IPO',
      'Trading FAQs',
      'Margin Trading Facility (MTF) and Margins',
      'Charts and orders',
      'Alerts and Nudges',
      'General'
    ]
  },
  {
    id: 'funds', icon: 'bi-currency-rupee', label: 'Funds',
    links: [
      'Add money',
      'Withdraw money',
      'Add bank accounts',
      'eMandates'
    ]
  },
  {
    id: 'console', icon: 'bi-gear', label: 'Console',
    links: [
      'Portfolio',
      'Corporate actions',
      'Funds statement',
      'Reports',
      'Profile',
      'Segments'
    ]
  },
  {
    id: 'coin', icon: 'bi-circle', label: 'Coin',
    links: [
      'Mutual funds',
      'National Pension Scheme (NPS)',
      'Fixed Deposit (FD)',
      'Features on Coin',
      'Payments and Orders',
      'General'
    ]
  },
];

function AccordionSection() {
  return (
    <div className="accordion mt-5" id='supportAccordion'>
      {
        topics.map((topic) => (
          <AccordionItem key={topic.id} topic={topic} />
        ))
      }
    </div>
  );
}

export default AccordionSection;