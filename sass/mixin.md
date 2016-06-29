### Mixin


    @mixin animation($name, $duration, $delay, $timingFunction, $count, $fillMode) {
      animation-name: $name;
      animation-duration: $duration;
      animation-delay: $delay;
      animation-timing-function: $timingFunction;
      animation-iteration-count: $count;
      animation-fill-mode: $fillMode;
    }



    @mixin transition($property, $duration, $timingFunction, $delay) {
      transition-property: $property;
      transition-duration: $duration;
      transition-timing-function: $timingFunction;
      transition-delay: $delay;
    }