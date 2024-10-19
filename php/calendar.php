<?php
$eventos = [
    [
        'title' => 'Reunión de proyecto',
        'start' => '2024-10-15',
        'backgroundColor' => '#add8e6',
        'borderColor' => '#add8e6',
    ],
    [
        'title' => 'Licencia de Juan',
        'start' => '2024-10-16',
        'end' => '2024-10-20',
        'backgroundColor' => '#ffd700',
        'borderColor' => '#ffd700',
    ],
];
echo json_encode($eventos);
