<?php

class Runway {
    public $id;
    public $length;
    public $width;

    public function __construct($id, $length, $width) {
        $this->id = $id;
        $this->length = $length;
        $this->width = $width;
    }

    
    public function displayDetails() {
        echo "Runway $this->id - Length: $this->length, Width: $this->width<br>";
    }
}

$runways = [
    new Runway(1, 3000, 50),
    // Add more runways as needed
];

echo '<h2>Runways</h2>';
foreach ($runways as $runway) {
    $runway->displayDetails();
}

?>
