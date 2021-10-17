export const DEFAULT_SYSTEM_STATUS = {
  systemStatuses: [
    {
      name: 'servers',
      overall: '',
      statuses: [
        { name: 'Auth Server', alive: '' },
        { name: 'Business Logic Server', alive: '' },
        { name: 'File Storage Server', alive: '' },
        { name: 'Payment Server', alive: '' },
        { name: 'Analytics Server', alive: '' },
        { name: 'Mail Server', alive: '' },
      ]
    }
  ],
  overall: '',
  checkDate: undefined
};
