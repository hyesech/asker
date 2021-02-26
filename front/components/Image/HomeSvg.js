import React from 'react';

const HomeSvg = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.995C0 3.57776 3.5733 0 7.98503 0C12.3968 0 15.9701 3.57776 16 7.98501C16 8.24552 15.9814 8.48739 15.9621 8.73762L15.9601 8.76452C15.9547 8.81825 15.9465 8.86908 15.9384 8.91858C15.9315 8.96116 15.9248 9.00275 15.9201 9.04435C15.9002 9.20425 15.8802 9.35415 15.8503 9.51405C15.8303 9.63397 15.8004 9.7439 15.7704 9.85382L15.7704 9.85384C15.7405 9.98376 15.7105 10.1037 15.6706 10.2336C15.6307 10.3635 15.5908 10.4834 15.5508 10.6034L15.5508 10.6035C15.5109 10.7134 15.471 10.8233 15.4311 10.9232C15.4011 10.9881 15.3737 11.0531 15.3462 11.1181C15.3188 11.183 15.2913 11.248 15.2614 11.3129L15.2614 11.313C15.2214 11.4029 15.1815 11.4928 15.1416 11.5728C15.0717 11.7127 15.0019 11.8526 14.922 11.9825C14.9021 12.0175 14.8821 12.05 14.8621 12.0824C14.8422 12.1149 14.8222 12.1474 14.8022 12.1824C14.7124 12.3223 14.6226 12.4622 14.5228 12.6021C14.4928 12.6521 14.4629 12.6921 14.433 12.732L14.4329 12.732C13.4847 14.0212 12.1572 15.0106 10.6101 15.5503C10.5901 15.5603 10.5702 15.5703 10.5402 15.5803C10.1709 15.7102 9.79164 15.8001 9.40237 15.8701C9.36744 15.8751 9.335 15.8801 9.30256 15.8851C9.27012 15.8901 9.23768 15.8951 9.20274 15.9001C8.81347 15.96 8.41422 16 8.00499 16C7.59576 16 7.19651 15.96 6.80724 15.9001C6.7723 15.8951 6.73986 15.8901 6.70742 15.8851C6.67498 15.8801 6.64255 15.8751 6.60761 15.8701C6.21834 15.8001 5.83905 15.7002 5.46974 15.5803C5.44978 15.5703 5.42982 15.5603 5.39988 15.5503C3.85278 15.0206 2.52527 14.0212 1.57704 12.732C1.56207 12.7121 1.5446 12.6896 1.52714 12.6671C1.50967 12.6446 1.4922 12.6221 1.47723 12.6021L1.20774 12.1824C1.18777 12.1474 1.16781 12.1149 1.14785 12.0824C1.12789 12.05 1.10792 12.0175 1.08796 11.9825C1.00811 11.8526 0.938241 11.7227 0.868372 11.5828C0.818465 11.4928 0.77854 11.4129 0.738615 11.3229L0.738607 11.3229C0.678722 11.193 0.618837 11.0631 0.568933 10.9332C0.548971 10.8782 0.529008 10.8257 0.509046 10.7733C0.489083 10.7208 0.46912 10.6683 0.449158 10.6134C0.429195 10.5534 0.409233 10.4909 0.38927 10.4285C0.369308 10.366 0.349345 10.3036 0.329382 10.2436C0.289457 10.1237 0.259513 9.99375 0.22957 9.86384C0.223498 9.83952 0.217427 9.81562 0.211439 9.79204C0.187894 9.69933 0.165634 9.61169 0.149719 9.52405C0.123274 9.38283 0.104614 9.24162 0.0868641 9.10728C0.0845155 9.08951 0.0821829 9.07186 0.0798503 9.05434C0.0744846 9.00062 0.0662346 8.94978 0.0582013 8.90028C0.0512908 8.8577 0.0445408 8.81611 0.0399251 8.77452C0.00998128 8.51468 0 8.25484 0 7.995ZM3.07424 12.0824C4.24205 13.4916 6.00873 14.391 7.98503 14.391C9.96132 14.391 11.728 13.4916 12.9058 12.0824C12.4596 11.8491 11.9468 11.6335 11.4622 11.4298C11.2205 11.3282 10.9857 11.2295 10.7698 11.133C9.75283 10.6805 9.74259 10.3795 9.73054 10.0255C9.72875 9.97301 9.72693 9.91934 9.72177 9.86384C9.72177 9.83385 9.71928 9.80137 9.71678 9.76889C9.71428 9.73641 9.71179 9.70393 9.71179 9.67395C10.111 9.31418 10.4404 8.82448 10.65 8.25484C10.65 8.25484 10.66 8.22486 10.66 8.21487C10.7099 8.09494 10.7498 7.96502 10.7798 7.8351C11.0493 7.78513 11.199 7.48532 11.2589 7.21549C11.3188 7.10556 11.4485 6.83573 11.4186 6.52592C11.3787 6.12617 11.2289 5.94628 11.0493 5.86633V5.79638C11.0493 5.2867 10.9994 4.55715 10.9095 4.07745C10.8896 3.93754 10.8596 3.80762 10.8197 3.6777C10.65 3.08807 10.2907 2.5584 9.8116 2.18863C9.31254 1.79888 8.61385 1.599 7.99501 1.599C7.36619 1.599 6.6675 1.80887 6.17842 2.18863C5.69931 2.5584 5.33999 3.08807 5.17031 3.6777C5.13038 3.80762 5.10044 3.93754 5.08047 4.06746C4.99064 4.54716 4.94074 5.2767 4.94074 5.78638V5.84635C4.76107 5.9263 4.60137 6.10618 4.56145 6.51593C4.5315 6.82573 4.65128 7.09557 4.71117 7.2055C4.77105 7.48532 4.93075 7.78513 5.21023 7.8351C5.24017 7.96502 5.2801 8.09494 5.33001 8.22486C5.33001 8.22486 5.33999 8.23485 5.33999 8.24485V8.25484C5.55958 8.83448 5.88896 9.33417 6.29819 9.69394C6.29819 9.7539 6.29819 9.80387 6.28821 9.86384C6.28389 9.91035 6.28144 9.95557 6.27904 9.9999C6.25925 10.3651 6.24275 10.6696 5.21023 11.133C4.99527 11.2291 4.76168 11.3262 4.52108 11.4262C4.03552 11.6281 3.52141 11.8419 3.07424 12.0824Z"
    />
  </svg>
);

export default HomeSvg;