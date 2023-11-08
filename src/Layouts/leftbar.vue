<template>
  <div class="leftbar">
    <topbar/>
    <VueAwesomeSideBar
      :menu="testMenu"
      paddingTop="60px"
      width="270px"
      vueRouterEnabel
     ></VueAwesomeSideBar>
  </div>
</template>

<script setup>
  import topbar from '@layouts/topbar.vue';
  import { defineAsyncComponent } from 'vue'
  import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid';
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  const {path} = useRoute();
  const miniMenu = ref(false)
  const imgUrl = nm => new URL(`../../assets/svg/${nm}.svg`, import.meta.url)




  const testMenu = [
  {
    name: 'Admin',
    icon: {element: 'img', attributes:{'src': imgUrl('admin-n')}, class: '' },
    children: [
      {name: 'Team', href: '/team', icon: BeakerIcon,},
      {name: 'Events', href: '/events'},
    ],
  },
  {
    name: 'Admin Sandbox',
    icon: {element: 'img', attributes:{'src': imgUrl('sandbox-n')}, class: '' },
    children: [
      {name: 'Certification Scenario', href: '/certificationscenario', icon: BeakerIcon,},
      {name: 'Certification Results', href: '/certificationresults'},
      {name: 'Test Logs', href: '/testlogs'},
      {name: 'Test Bookings', href: '/testbookings'},
    ],
  },
  {
    name: 'Accounts',
    icon: {element: 'img', attributes:{'src': imgUrl('accounts-g')}, class: '' },
    children: [
      {name: 'Company', href: '/company', icon: BeakerIcon,},
      {name: 'Property', href: '/property'},
      {name: 'Channels', href: '/channels'},
      {name: 'Partner', href: '/partner'},
      {name: 'Airline', href: '/airline'},
      {name: 'Merchnat', href: '/merchant'},
    ],
  },
  {
    name: 'Inventories',
    icon: {element: 'img', attributes:{'src': imgUrl('sandbox-n')}, class: '' },
    children: [
      {name: 'Rooms', href: '/rooms', icon: BeakerIcon,},
      {name: 'Room by Hours', href: '/roombyhours'},
      {name: 'Meeting Rooms', href: '/meetingrooms'},
    ],
  },
  {
    name: 'Mapping',
    icon: {element: 'img', attributes:{'src': imgUrl('sandbox-n')}, class: '' },
    children: [
      {name: 'Request', href: '/request', icon: BeakerIcon,},
      {name: 'Results', href: '/results'},
      {name: 'Meeting Rooms', href: '/mapmeetingrooms'},
    ],
  },
  {
    name: 'Setting',
    icon: {element: 'img', attributes:{'src': imgUrl('setting-n')}, class: '' },
    children: [
      {name: 'Account', href: '/account', icon: BeakerIcon,},
      {name: 'Business', href: '/business'},
      {name: 'Team', href: '/team'},
      {name: 'Branding', href: '/branding'},
      {name: 'Notification', href: '/notification'},
      {name: 'Terms', href: '/terms'},
      {name: 'Taxes', href: '/taxes'},
      {name: 'Models', href: '/models'},
      {name: 'Branches', href: '/branches'},
      {name: 'Integrations', href: '/integrations'},
      {name: 'Approvals', href: '/approvals'},
      {name: 'Payout', href: '/payout'},
      {name: 'Alert', href: '/alert'},
      {name: 'Automation', href: '/automation'},
      {name: 'Reminders', href: '/reminders'},
    ],
  },
  {
    name: 'Connect',
    icon: {element: 'img', attributes:{'src': imgUrl('connect-g')}, class: '' },
    children: [
      {name: 'Property', href: '/property', icon: BeakerIcon,},
      {name: 'Demand', href: '/demand'},
      {name: 'Supplier', href: '/supplier'},
      {name: 'Setup', href: '/setup'},
      {name: 'Interact', href: '/interact'},
    ],
  },
  {
    name: 'Content',
    icon: {element: 'img', attributes:{'src': imgUrl('terms-g')}, class: '' },
    children: [
      {name: 'Languages', href: '/languages', icon: BeakerIcon,},
      {name: 'New Items', href: '/newitems'},
    ],
  },
  {
    name: 'Receivable',
    icon: {element: 'img', attributes:{'src': imgUrl('receivable-g')}, class: '' },
    children: [
      {name: 'Sales', href: '/sales', icon: BeakerIcon,},
      {name: 'Transactions', href: '/transactions'},
      {name: 'Disputes', href: '/disputes'},
      {name: 'Unmapped', href: '/unmapped'},
    ],
  },
  {
    name: 'Payable',
    icon: {element: 'img', attributes:{'src': imgUrl('payable-g')}, class: '' },
    children: [
      {name: 'Bookings', href: '/booking', icon: BeakerIcon,},
      {name: 'Requests', href: '/requests'},
      {name: 'Disputes', href: '/disputes'},
      {name: 'Credit', href: '/credit'},
      {name: 'Transactions', href: '/transactions'},
      {name: 'Logs', href: '/logs'},
    ],
  },
  {
    name: 'Credit',
    icon: {element: 'img', attributes:{'src': imgUrl('credit-g')}, class: '' },
    children: [
      {name: 'Applications', href: '/applications', icon: BeakerIcon,},
      {name: 'Exposure', href: '/exposure'},
    ],
  },
  {
    name: 'Approve',
    icon: {element: 'img', attributes:{'src': imgUrl('approve-g')}, class: '' },
    children: [
      {name: 'Sales', href: '/sales', icon: BeakerIcon,},
      {name: 'Payments', href: '/payments'},
      {name: 'Disputes', href: '/disputes'},
      {name: 'Credit', href: '/credit'},
      {name: 'Credit Application', href: '/creditapp'},
      {name: 'Logs', href: '/logs'},
    ],
  },
  {
    name: 'Gateway',
    icon: {element: 'img', attributes:{'src': imgUrl('gateway-g')}, class: '' },
    children: [
      {name: 'Setting', href: '/setting', icon: BeakerIcon,},
      {name: 'Sales', href: '/sales'},
      {name: 'Transactions', href: '/transactions'},
      {name: 'Disputes', href: '/disputes'},
      {name: 'Credit', href: '/credit'},
      {name: 'Logs', href: '/logs'},
    ],
  },
  {
    name: 'Balances',
    icon: {element: 'img', attributes:{'src': imgUrl('finance-n')}, class: '' },
    children: [
      {name: 'Activations', href: '/activations', icon: BeakerIcon,},
      {name: 'Overview', href: '/overview'},
      {name: 'Top-ups', href: '/topups'},
      {name: 'Withdraw', href: '/withdraw'},
      {name: 'Payouts', href: '/payout'},
    ],
  },
  {
    name: 'Fees',
    icon: {element: 'img', attributes:{'src': imgUrl('wallet-g')}, class: '' },
    children: [
      {name: 'Payout', href: '/payout', icon: BeakerIcon,},
      {name: 'Convert', href: '/convert'},
      {name: 'Payment', href: '/payment'},
      {name: 'Credit', href: '/credit'},
    ],
  },
  {
    name: 'Leads',
    icon: {element: 'img', attributes:{'src': imgUrl('lead-g')}, class: '' },
    children: [
      {name: 'Property', href: '/property', icon: BeakerIcon,},
      {name: 'Company', href: '/company'},
    ],
  },
  {
    name: 'Sandbox',
    icon: {element: 'img', attributes:{'src': imgUrl('sandbox-n')}, class: '' },
    children: [
      {name: 'Connect', href: '/connect', icon: BeakerIcon,},
      {name: 'Mapping', href: '/mapping'},
      {name: 'Rules & Inventories', href: '/rulesninv'},
      {name: 'Transaction', href: '/transaction'},
      {name: 'Certification', href: '/certification'},
      {name: 'Logs', href: '/logs'},
    ],
  },
  {
    name: 'Connectivity',
    icon: {element: 'img', attributes:{'src': imgUrl('connectivity g')}, class: '' },
    children: [
      {name: 'Channels', href: '/channels', icon: BeakerIcon,},
      {name: 'Environment', href: '/environment'},
      {name: 'Structure', href: '/structure'},
      {name: 'Logs', href: '/logs'},
      {name: 'Statistics', href: '/statistics'},

    ],
  },
  {
    name: 'Reporting',
    icon: {element: 'img', attributes:{'src': imgUrl('reporting-n')}, class: '' },
    children: [
      {name: 'Connection', href: '/connection', icon: BeakerIcon,},
      {name: 'Shopping', href: '/shopping'},
      {name: 'Transaction', href: '/transaction'},
      {name: 'Metrics', href: '/metrics'},
      {name: 'Events', href: '/events'},

    ],
  },
  {
    name: 'Alerts',
    icon: {element: 'img', attributes:{'src': imgUrl('alert-g')}, class: '' },
  },
  {
    name: 'Support',
    icon: {element: 'img', attributes:{'src': imgUrl('support-g')}, class: '' },
    children: [
      {name: 'Help Center', href: '/helpcenter', icon: BeakerIcon,},
      {name: 'Chat with us', href: '/chatwithus'},
      {name: 'Report a bug', href: '/reportabug'},
    ],
  },
  {
    name: 'Features',
    icon: {element: 'img', attributes:{'src': imgUrl('feature')}, class: '' },
  },
  {
    name: ' Whats New  ',
    icon: {element: 'img', attributes:{'src': imgUrl('new-g')}, class: '' },
  },


]

</script>
