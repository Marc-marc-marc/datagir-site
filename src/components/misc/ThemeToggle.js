import React, { useContext } from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'

import StyleContext from 'src/utils/StyleContext'

const Wrapper = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    left: 0;
    right: 0;
    display: ${(props) => (props.mobile ? 'block' : 'none')};
  }
`
const Sun = styled.svg`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.2rem;
  height: auto;
`
const Moon = styled(Sun)`
  width: 1rem;
`
export default function Visible(props) {
  const { theme, themes, setTheme } = useContext(StyleContext)

  return (
    <Wrapper mobile={props.mobile}>
      <Switch
        onChange={() =>
          setTheme((prevTheme) =>
            prevTheme === 'default' ? 'accessible' : 'default'
          )
        }
        checked={theme === 'accessible'}
        offColor={themes.accessible.colors.background}
        onColor={themes.default.colors.background}
        offHandleColor={themes.default.colors.background}
        onHandleColor={themes.accessible.colors.background}
        uncheckedIcon={
          <Sun
            x='0px'
            y='0px'
            width='45.16px'
            height='45.16px'
            viewBox='0 0 45.16 45.16'
          >
            <path
              fill={themes.accessible.colors.main}
              d='M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312    S28.816,11.269,22.58,11.269z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207      v3.531C24.787,6.956,23.798,7.944,22.58,7.944z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208      v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0      c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121      c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206      h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206      h3.531C6.956,24.786,7.944,23.799,7.944,22.58z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0      l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z'
            />

            <path
              fill={themes.accessible.colors.main}
              d='M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0      c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z'
            />
          </Sun>
        }
        checkedIcon={
          <Moon x='0px' y='0px' viewBox='0 0 312.812 312.812'>
            <path
              fill={themes.default.colors.main}
              d='M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4    c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4    c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4    c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z'
            />
          </Moon>
        }
      />
    </Wrapper>
  )
}
