export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 10,
    fontSize: 12
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: '9999'
  }),
  container: (provided, state) => ({
    ...provided,
    fontSize: 12
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: '#aeaeae',
    backgroundImage: 'linear-gradient(to bottom, white, #E3E3E3)',
    borderRadius: '6px',
    color: '#4a4a4a',
    // height: '32px',
    'min-height': '50px'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: '#aeaeae'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '5px'
  })
};

export const fieldStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 10,
    fontSize: 14
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: '9999'
  }),
  container: (provided, state) => ({
    ...provided,
    fontSize: 14
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: '#aeaeae',
    borderRadius: '0.25rem;',
    color: '#4a4a4a',
    // height: '32px',
    'min-height': '39px'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: '#aeaeae',
    display: 'none'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '5px',
    backgroundColor: 'transparent'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#aeaeae'
  })
};
