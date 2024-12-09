import React from 'react';

function Arrow(props) {

  return (
    <svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

      {props.isBig ?
      ( <path d="m108.23 321.5c-5.0807-0.91485-10.517-2.1674-12.08-2.7835-1.5633-0.61608-4.7609-1.8398-7.1058-2.7195-10.112-3.7931-29.185-28.264-37.196-47.724-2.5668-6.2345-9.3298-26.872-12.74-38.878-0.45772-1.6113 0.07792-2.487 1.521-2.487 1.2251 0 2.2275-0.63953 2.2275-1.4212s1.2253-1.4212 2.7229-1.4212c2.5526 0 11.489 9.5796 11.489 12.316 0 0.68649 1.8533 3.4965 4.1185 6.2446 2.2652 2.748 5.1436 7.4499 6.3965 10.449 5.2572 12.582 29.693 43.169 38.883 48.67 14.116 8.4496 46.747 4.2757 60.397-7.7256 4.747-4.1738 27.01-15.949 30.155-15.949 1.192 0 2.1672-0.5702 2.1672-1.2671 0-0.69691 1.7126-1.697 3.8059-2.2223 2.0932-0.52537 7.6891-2.7487 12.435-4.9406 4.7461-2.192 12.147-5.1137 16.446-6.4927 4.299-1.379 8.4559-2.9788 9.2376-3.5552 0.78164-0.57635 3.9272-1.856 6.9901-2.8436 3.0629-0.98762 7.5396-2.9535 9.9482-4.3687s8.2164-3.2148 12.906-3.9992c4.6898-0.78442 12.035-2.739 16.323-4.3435 4.288-1.6045 9.2066-2.9173 10.93-2.9173 1.7236 0 3.4793-0.55905 3.9016-1.2424 1.4919-2.414 28.901-4.7952 58.378-5.0716 40.291-0.37774 53.811 1.2293 70.703 8.404 6.0432 2.5668 1.543-2.3643-9.1809-10.06-14.165-10.166-28.354-24.723-32.955-33.812-3.4037-6.7232-3.4037-6.7232 1.5348-9.0782 4.7524-2.2662 5.0281-2.2433 7.3148 0.60888 1.307 1.6302 5.6756 4.7202 9.7081 6.8668 4.0325 2.1466 9.4685 6.1056 12.08 8.7977 2.6114 2.6921 5.6558 5.6599 6.7653 6.595 13.665 11.517 41.609 41.66 45.507 49.086 4.8451 9.232-6.7265 16.462-27.512 17.188-3.8442 0.13444-8.0011 0.77459-9.2376 1.4226-1.2365 0.64805-5.126 1.6113-8.6434 2.1406-6.2202 0.93598-8.9143 1.7321-17.765 5.2497-2.3449 0.932-8.1006 2.803-12.79 4.1578-7.8734 2.2745-34.712 13.139-53.294 21.574-12.105 5.4948-15.891 5.95-20.345 2.4463-4.5119-3.5491-4.7143-5.5104-1.1702-11.338 2.211-3.6357 14.147-12.774 16.685-12.774 0.41595 0 6.6291-2.8069 13.807-6.2375 7.1779-3.4306 15.609-7.0383 18.735-8.0171 3.1266-0.9788 6.644-2.1072 7.8164-2.5075 1.1725-0.4003 2.7713-0.79259 3.5529-0.87177 0.78164-0.0791 2.8078-0.93489 4.5025-1.9016 1.6947-0.96671 6.8109-2.7867 11.369-4.0444 19.745-5.4481 24.094-6.535 27-6.7487 4.9074-0.36095 5.4319-2.1208 0.99621-3.3428-8.5793-2.3636-82.99-0.24867-107.11 3.0443-52.271 7.1362-112.56 27.109-144.96 48.024-1.9522 1.2601-6.7471 2.927-10.655 3.7043-3.9082 0.77724-9.9837 2.3959-13.501 3.5971-8.0997 2.766-25.869 6.6273-29.337 6.3749-1.4515-0.1056-6.7959-0.94054-11.877-1.8554zm219.57-7.9007c0.48309-0.78164 0.20107-1.4212-0.6267-1.4212s-1.505 0.63953-1.505 1.4212 0.28202 1.4212 0.62671 1.4212 1.022-0.63952 1.505-1.4212zm-240.14-10.706c-3.1083-2.6161-5.8891-4.5188-6.1796-4.2283-0.94671 0.94671 4.6145 7.4102 7.5494 8.7743 5.045 2.3448 4.4428 0.34617-1.3698-4.546zm259.33-55.294c0-0.34469-0.63952-1.022-1.4212-1.505s-1.4212-0.20107-1.4212 0.6267c0 0.82778 0.63953 1.505 1.4212 1.505s1.4212-0.28201 1.4212-0.6267z" stroke-width="1.4212"/> )
      :
      ( <path d="m64.699 429.74c0-8.2189 6.683-13.265 17.569-13.265 9.663 0 24.854-6.3722 33.757-14.16 11.66-10.199 14.297-10.765 9.4282-2.0229-3.7181 6.6756 2.7646 2.124 14.406-10.115 11.641-12.239 25.327-22.145 30.409-22.252 71.132-1.4928 173.07-122.52 207.04-188.19 17.483-33.808 12.007-33.407-35.173 2.5698-22.995 17.535-45.667 31.881-50.384 31.881-15.56 0-9.5071-39.072 6.8578-44.266 25.004-7.936 81.197-55.871 98.123-83.703 8.6202-14.175 20.783-25.772 27.029-25.772 12.267 0 25.542 51.24 16.899 65.225-2.8242 4.5696-1.4988 12.7 2.9453 18.069 12.07 14.58-7.9657 106.86-23.202 106.86-8.0496 0-11.065-7.0802-9.477-22.252 2.8434-27.165-6.7638-28.098-20.453-3.4129-81.175 146.39-325.77 280.5-325.77 204.81z" stroke-width="8.0916"/> )
      }

    </svg>
  );

}

export default Arrow;