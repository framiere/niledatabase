export default function GithubStar(props: { fill?: "#FFB343" }) {
  const { fill = "none" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="transparent"
    >
      <path
        d="M9.05931 8.23516L10.5595 3.61804L12.0597 8.23516C12.1534 8.52358 12.4222 8.71885 12.7254 8.71885H17.5802L13.6526 11.5724C13.4073 11.7506 13.3046 12.0666 13.3983 12.355L14.8985 16.9721L10.971 14.1186C10.7256 13.9403 10.3934 13.9403 10.1481 14.1186L6.2205 16.9721L7.72069 12.355C7.8144 12.0666 7.71174 11.7506 7.4664 11.5724L3.53884 8.71885H8.39357C8.69683 8.71885 8.9656 8.52358 9.05931 8.23516Z"
        stroke="url(#paint0_linear_1523_1272)"
        className="transition-all"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1523_1272"
          x1="10.5595"
          y1="2"
          x2="10.5595"
          y2="18.2812"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8F8F8" />
          <stop offset="1" stop-color="#8C8C8C" />
        </linearGradient>
      </defs>
    </svg>
  );
}