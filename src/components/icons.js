import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Icons extends PureComponent {
  render() {
    const {
      backgroundColor,
      iconName,
      width,
      height,
    } = this.props;
    switch (iconName) {
      case 'right-arrow':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" width={width} height={height}>
            <g>
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" fill={backgroundColor}/>
            </g>
          </svg>
        );
      case 'left-arrow':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" xmlSpace="preserve" width={width} height={height}>
            <g>
              <path
                d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                fill={backgroundColor}
              />
            </g>
          </svg>
        );
      case 'quote-left':
        return (
          <svg viewBox="0 0 1792 1792" width={width} height={height}>
            <path
              d="M832 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'quote-right':
        return (
          <svg height={height} viewBox="0 0 1792 1792" width={width}>
            <path
              d="M832 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zm896 0v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'facebook':
        return (
          <svg height={height} width={width} viewBox="0 0 67 67">
            <path
              d="M28.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M33,64C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'instagram':
        return (
          <svg height={height} width={width} viewBox="0 0 56.693 56.693" >
            <g>
              <polygon points="38.512,24.392 38.512,20.445 38.512,19.855 37.922,19.857 33.975,19.871 33.99,24.407  " fill={backgroundColor}/>
              <path
                d="M28.225,34.868c2.598,0,4.713-2.113,4.713-4.711c0-1.025-0.334-1.975-0.893-2.748c-0.855-1.186-2.248-1.965-3.82-1.965   s-2.963,0.779-3.82,1.965c-0.559,0.773-0.891,1.723-0.891,2.748C23.514,32.755,25.627,34.868,28.225,34.868z"
                fill={backgroundColor}
              />
              <path
                d="M28.348,5.158c-13.6,0-24.625,11.023-24.625,24.623c0,13.6,11.025,24.625,24.625,24.625   c13.598,0,24.623-11.025,24.623-24.625C52.971,16.181,41.945,5.158,28.348,5.158z M41.611,27.409V38.37   c0,2.852-2.322,5.172-5.174,5.172H20.012c-2.853,0-5.173-2.32-5.173-5.172V27.409v-5.464c0-2.853,2.32-5.173,5.173-5.173h16.425   c2.852,0,5.174,2.32,5.174,5.173V27.409z"
                fill={backgroundColor}
              />
              <path
                d="M35.545,30.157c0,4.035-3.283,7.32-7.32,7.32s-7.318-3.285-7.318-7.32c0-0.973,0.193-1.898,0.537-2.748h-3.996V38.37   c0,1.414,1.15,2.564,2.564,2.564h16.425c1.414,0,2.564-1.15,2.564-2.564V27.409h-3.998C35.35,28.259,35.545,29.185,35.545,30.157z"
                fill={backgroundColor}
              />
            </g>
          </svg>
        );
      case 'twitter':
        return (
          <svg height={height} width={width} viewBox="0 0 56.693 56.693">
            <path
              d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'linkedin':
        return (
          <svg height={height} width={width} viewBox="0 0 67 67">
            <path
              d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z"
              fill={backgroundColor}
              />
          </svg>
        );
      case 'github':
        return (
          <svg width={width} height={height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'right':
        return(
          <svg height={height} width={width} viewBox="0 0 96 96" >
            <path
              d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'mail':
        return(
          <svg height={height} width={width} enableBackground="new 0 0 128 128;" version="1.1" viewBox="0 0 128 128">
            <g>
                <circle cx="64" cy="64" r="64"/>
            </g>
            <g>
                <g>
                    <path d="M64,28"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M64,72.4l38.2-32.7c-0.6-0.4-1.4-0.7-2.2-0.7H28c-0.8,0-1.6,0.3-2.2,0.7L64,72.4z" fill={backgroundColor}/>
                </g>
                <g>
                    <path d="M66.6,75.4c-1.5,1.3-3.7,1.3-5.2,0L24,43.5V85c0,2.2,1.8,4,4,4h72c2.2,0,4-1.8,4-4V43.4L66.6,75.4z" fill={backgroundColor}/>
                </g>
            </g>
          </svg>
        );
      case 'check':
        return(
          <svg enable-background="new 0 0 24 24" height={height} version="1.1" viewBox="0 0 24 24" width={width}>
            <g>
              <g>
                <path
                  d="M12,0C5.373,0,0,5.373,0,12c0,6.628,5.373,12,12,12c6.627,0,12-5.372,12-12C24,5.373,18.627,0,12,0z M19.754,9.561    l-8.607,8.607c-0.176,0.177-0.462,0.177-0.637,0l-1.272-1.285c-0.175-0.176-0.462-0.464-0.636-0.642l-2.96-3.112    c-0.087-0.087-0.133-0.21-0.133-0.327c0-0.115,0.046-0.227,0.133-0.314l1.297-1.169c0.088-0.09,0.205-0.134,0.321-0.134    c0.114,0.001,0.228,0.046,0.315,0.134l2.936,2.995c0.175,0.178,0.461,0.178,0.637,0l6.699-6.681c0.176-0.177,0.461-0.177,0.636,0    l1.272,1.285C19.93,9.094,19.93,9.384,19.754,9.561z"
                  fill={backgroundColor}
                />
              </g>
            </g>
          </svg>
        );
      default:
        return null;
    }
  }
}

Icons.propTypes = {
  iconName: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icons.defaultProps = {
  iconName: '',
  backgroundColor: '#000',
  width: 20,
  height: 20,
};

export default Icons;
