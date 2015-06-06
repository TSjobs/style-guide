angular.module('styleguide', ['ui.router'])
.run(function($rootScope){

  $rootScope.guides = [
    'buttons',
    'colors',
    'mobile',
    'modals',
    'navigation',
    'tags',
    'tabs',
    'typography',
    'panels',
    'lists',
    'forms',
    'icons',
    'images'
  ]

  $rootScope.main_colors = [
    'tsqd-blue',
    'tsqd-green',
    'tsqd-gold',
    'tsqd-gold-80'
  ]

  $rootScope.secondary_colors = [
    'tsqd-light-blue',
    'tsqd-blue-hover',
    'tsqd-blue-110',
    'tsqd-city-blue',
    'tsqd-urgent-orange',
    'tsqd-red'
  ]

  $rootScope.gray_colors = [
    'tsqd-gray-01',
    'tsqd-gray-02',
    'tsqd-gray-03',
    'tsqd-gray-04',
    'tsqd-gray-05',
    'tsqd-gray-06',
    'tsqd-gray-07',
    'tsqd-gray-08',
    'tsqd-gray-09',
    'tsqd-gray-10',
  ]

  $rootScope.color_table = [
    [
      '',
      'tsqd-gray',
      'tsqd-blue',
      'tsqd-green',
      'tsqd-gold',
    ],
    [
      '01',
      'tsqd-gray-01',
      'tsqd-blue-01',
      'tsqd-green-01',
      'tsqd-gold-01',
    ],
    [
      '02',
      'tsqd-gray-02',
      'tsqd-blue-02',
      'tsqd-green-02',
      'tsqd-gold-02',
    ],
    [
      '03',
      'tsqd-gray-03',
      'tsqd-blue-03',
      'tsqd-green-03',
      'tsqd-gold-03',
    ],
    [
      '04',
      'tsqd-gray-04',
      'tsqd-blue-04',
      'tsqd-green-04',
      'tsqd-gold-04',
    ],
    [
      '05',
      'tsqd-gray-05',
      'tsqd-blue-05',
      'tsqd-green-05',
      'tsqd-gold-05',
    ],
    [
      '06',
      'tsqd-gray-06',
      'tsqd-blue-06',
      'tsqd-green-06',
      'tsqd-gold-06',
    ],
    [
      '07',
      'tsqd-gray-07',
      'tsqd-blue-07',
      'tsqd-green-07',
      'tsqd-gold-07',
    ],
    [
      '08',
      'tsqd-gray-08',
      'tsqd-blue-08',
      'tsqd-green-08',
      'tsqd-gold-08',
    ],
    [
      '09',
      'tsqd-gray-09',
      'tsqd-blue-09',
      'tsqd-green-09',
      'tsqd-gold-09',
    ],
    [
      '10',
      'tsqd-gray-10',
      'tsqd-blue-10',
      'tsqd-green-10',
      'tsqd-gold-10',
    ]
  ]
  $rootScope.onboarding_colors = [
    [
      '',
      'tsqd-coral',
      'tsqd-teal'
    ],
    [
      '01',
      'tsqd-coral-01',
      'tsqd-teal-01'
    ],
    [
      '02',
      'tsqd-coral-02',
      'tsqd-teal-02'
    ],
    [
      '03',
      'tsqd-coral-03',
      'tsqd-teal-03'
    ],
    [
      '04',
      'tsqd-coral-04',
      'tsqd-teal-04'
    ]
  ]

  $rootScope.success_failure_colors = [
    'success',
    'failure',
  ]

  $rootScope.members = [ { name: 'Allison Smith', business: 'Flora and Fauna', address: '1234 17th St', initials: 'AS' }, { name: 'Andrea Pinal', business: 'Stable Cafe', address: '142 Folsom St', initials: 'AP' }, { name: 'Andrew Tower', business: 'Townsquared', address: '3180 17th St', initials: 'AT' } ];

});
