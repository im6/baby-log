// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 1200);
  },
    '/api/getAllCharts': function(req, res) {
        setTimeout(function() {
            res.json({
                success: true,
                data: [
                    {
                        "userId": 0,
                        "chartId": 0,
                        "name": "web ranking",
                        "data": {
                            "categories": [],
                            "series": [
                                {
                                    "name": "rank1",
                                    "type": "line",
                                    "data": [
                                        3666800,
                                        3664290,
                                        3668050,
                                        3665530,
                                        3622860,
                                        3616000,
                                        3613550,
                                        3611690,
                                        3609010,
                                        3603270,
                                        3601220,
                                        3645060,
                                        3651210,
                                        3668730,
                                        3679820,
                                        3689640,
                                        3690940,
                                        3690660,
                                        3691060,
                                        3690930,
                                        3690820,
                                        3797810,
                                        3799050,
                                        3801020,
                                        3802130,
                                        3828970,
                                        3831110,
                                        3844570,
                                        3846530,
                                        3848400
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "userId": 0,
                        "chartId": 0,
                        "name": "web ranking2",
                        "data": {
                            "categories": [],
                            "series": [
                                {
                                    "name": "sub-1",
                                    "type": "line",
                                    "data": [
                                        3666800,
                                        1664290,
                                        2668050
                                    ]
                                },
                                {
                                    "name": "sub2",
                                    "type": "area",
                                    "data": [
                                        3666800,
                                        2664290,
                                        1668050
                                    ]
                                }
                            ]
                        }
                    }
                ]
            });
        }, 200);
    },
};
