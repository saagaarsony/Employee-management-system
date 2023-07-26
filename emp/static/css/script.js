(function($) {
    $(function() {
     var ds = {
       'name': 'Lao Lao',
       'title': 'general manager',
       'children': [
         { 'name': 'Bo Miao', 'title': 'department manager' },
         { 'name': 'Su Miao', 'title': 'department manager',
           'children': [
             { 'name': 'Tie Hua', 'title': 'senior engineer' },
             { 'name': 'Hei Hei', 'title': 'senior engineer',
               'children': [
                 { 'name': 'Pang Pang', 'title': 'engineer' },
                 { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
               ]
              }
            ]
          },
          { 'name': 'Hong Miao', 'title': 'department manager' },
          { 'name': 'Chun Miao', 'title': 'department manager' }
        ]
      };
  
      var oc = $('#chart-container').orgchart({
        'data' : ds,
        'nodeContent': 'title',
        'direction': 'l2r',
        'pan':true
      });
  
    });
  })(jQuery);