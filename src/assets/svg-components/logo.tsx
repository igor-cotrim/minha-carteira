const LogoSvg = (props: any) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        width="50"
        height="50"
        rx="10"
        fill="#E44C4E"
      />
      <rect x="14" y="4"
        width="23"
        height="42"
        fill="url(#pattern0)"
        fillOpacity="0.4"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#image0"
            transform="translate(0 0.0325176) scale(0.00925926 0.00519611)"
          />
        </pattern>
        <image
          id="image0"
          width="98"
          height="186"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default LogoSvg