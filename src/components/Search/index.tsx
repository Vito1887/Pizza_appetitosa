import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import '../../scss/app.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    //document.querySelector('input').focus();

    // if (inputRef.current) {
    // 	inputRef.current.focus();
    // }
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Filled_Line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" fill="#F9ED69" id="XMLID_904_" r="9" />
        <path
          d="M16,22c-4.971,0-9-4.029-9-9c0-3.111,1.578-5.852,3.977-7.469C7.496,6.774,5,10.091,5,14  c0,4.971,4.029,9,9,9c1.86,0,3.588-0.565,5.023-1.531C18.077,21.806,17.062,22,16,22z"
          fill="#BBB24F"
          id="XMLID_410_"
        />
        <path
          d="M14,5c-2.996,0-5.643,1.47-7.279,3.721C8.205,7.643,10.025,7,12,7c4.971,0,9,4.029,9,9  c0,1.975-0.643,3.795-1.721,5.279C21.53,19.643,23,16.996,23,14C23,9.029,18.971,5,14,5z"
          fill="#FBF4A5"
          id="XMLID_411_"
        />
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_899_"
          r="9"
          stroke="#200F60"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="  M15.996,8.341c1.702,0.602,3.054,1.952,3.659,3.653"
          fill="none"
          id="XMLID_417_"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_898_"
          stroke="#200F60"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="100%"
          strokeLinejoin="round"
          strokeMiterlimit="1.41421"
          version="1.1"
          viewBox="0 0 100 126"
          width="100%"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50,25.851c-20.682,0 -37.5,16.818 -37.5,37.5c0,20.682 16.818,37.5 37.5,37.5c20.682,0 37.5,-16.818 37.5,-37.5c0,-20.682 -16.818,-37.5 -37.5,-37.5Z"
            fill="#eaff18"
          />
          <g>
            <path
              d="M40.8,78.251l9.2,-9.1l9.2,9.1l5.6,-5.6l-9.1,-9.2l9.1,-9.2l-5.6,-5.6l-9.2,9.1l-9.2,-9.1l-5.6,5.6l9.1,9.2l-9.1,9.2l5.6,5.6Z"
              fillRule="nonzero"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
