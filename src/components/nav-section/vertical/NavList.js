import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { List, Collapse } from '@mui/material';
//
import { NavItemRoot, NavItemSub } from './NavItem';
import { getActive } from '..';
import useAuth from '../../../hooks/useAuth';

// ----------------------------------------------------------------------

NavListRoot.propTypes = {
  isCollapse: PropTypes.bool,
  list: PropTypes.object,
};

export function NavListRoot({ list, isCollapse }) {

  const { user } = useAuth();

  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    let totalHidden = 0;
    hasChildren.forEach(element => {
      if (element.permission) {
        if (user.permission[element.permission] === false) {
          totalHidden += 1;
        }
      }
    });
    if (totalHidden === hasChildren.length) {
      return '';
    }
    return (
      <>
        <NavItemRoot item={ list } isCollapse={ isCollapse } active={ active } open={ open } onOpen={ () => setOpen(!open) } />

        { !isCollapse && (
          <Collapse in={ open } timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { (list.children || []).map((item) => (
                <NavListSub key={ item.title } list={ item } />
              )) }
            </List>
          </Collapse>
        ) }
      </>
    );
  }
  if (list.permission) {
    if (user.permission[list.permission] === false) {
      return '';
    }
  }

  return <NavItemRoot item={ list } active={ active } isCollapse={ isCollapse } />;
}

// ----------------------------------------------------------------------

NavListSub.propTypes = {
  list: PropTypes.object,
};

function NavListSub({ list }) {

  const { user } = useAuth();

  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    let totalHidden = 0;
    hasChildren.forEach(element => {
      if (element.permission) {
        if (user.permission[element.permission] === false) {
          totalHidden += 1;
        }
      }
    });
    if (totalHidden === hasChildren.length) {
      return '';
    }
    return (
      <>
        <NavItemSub item={ list } onOpen={ () => setOpen(!open) } open={ open } active={ active } />

        <Collapse in={ open } timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={ { pl: 3 } }>
            { (list.children || []).map((item) => (
              <NavItemSub key={ item.title } item={ item } active={ getActive(item.path, pathname) } />
            )) }
          </List>
        </Collapse>
      </>
    );
  }

  if (list.permission) {
    if (user.permission[list.permission] === false) {
      return '';
    }
  }

  return <NavItemSub item={ list } active={ active } />;
}
