<?php

/*
$studentInfo = new object();
$studentInfo->student = new object();
$studentInfo->student->first_name  = $_GET["first_name" ];
$studentInfo->student->last_name   = $_GET["last_name"  ];
$studentInfo->student->student_id  = $_GET["student_id" ];
$studentInfo->student->performance = $_GET["performance"];
$studentInfo->student->skill       = $_GET["skill"      ];
$studentInfo->student->instrument  = $_GET["instrument" ];
$studentInfo->student->location    = $_GET["location"   ];
$studentInfo->student->room        = $_GET["room"       ];
$studentInfo->student->time_slot   = $_GET["time_slot"  ];

if ($studentInfo->student->performance == "Duet") {
  $studentInfo->student->first_name_2 = $_GET["first_name_2"];
  $studentInfo->student->last_name_2  = $_GET["last_name_2" ];
  $studentInfo->student->student_id_2 = $_GET["student_id_2"];
}
*/

$studentInfo = [
  "Student" => [
  "first_name"  => $_GET["first_name" ],
  "last_name"   => $_GET["last_name"  ],
  "student_id"  => $_GET["student_id" ],
  "performance" => $_GET["performance"],
  "skill"       => $_GET["skill"      ],
  "instrument"  => $_GET["instrument" ],
  "location"    => $_GET["location"   ],
  "room"        => $_GET["room"       ],
  "time_slot"   => $_GET["time_slot"  ]
  ]
];

$studentInfoJSON = json_encode($studentInfo);
$result = file_put_contents("data/students.json",$studentInfoJSON,FILE_APPEND);
return $result;
