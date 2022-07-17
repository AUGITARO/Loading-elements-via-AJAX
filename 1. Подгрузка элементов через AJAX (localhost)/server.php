<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = [
        [
            'property' => 'value-1'
        ],
        [
            'property' => 'value-2'
        ],
        [
            'property' => 'value-3'
        ],
        [
            'property' => 'value-1'
        ],
        [
            'property' => 'value-2'
        ],
        [
            'property' => 'value-3'
        ],
        [
            'property' => 'value-1'
        ],
    ];

    echo json_encode($data);
}
