import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

const searchBlock = {
  display: 'flex',
  justifyContent: 'center',
<<<<<<< HEAD
  marginTop: '20px',
};

class HomePage extends React.Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    const localStorageInput = localStorage.getItem('input');

    if (typeof localStorageInput === 'string') {
      this.setState({ value: localStorageInput });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('input', this.state.value);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div style={searchWrap}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.value}
          placeholder="Search ..."
=======
  marginTop: '14px',
};

const searchWrap = {
  display: 'flex',
};

const searchInput = {
  border: '1px solid #777',
  borderRadius: '4px',
  borderRight: 'none',
};

const HomePage = () => {
  return (
    <div style={searchBlock}>
      <Search style={searchWrap}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          style={searchInput}
>>>>>>> fd79441cdbca0a36116eccd294c3ce225e2f78b0
        />
        <Button variant="contained">Search</Button>
      </div>
    );
  }
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
}));

export { HomePage };
