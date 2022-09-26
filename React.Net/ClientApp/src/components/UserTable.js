import React, { Component } from 'react';

const getUsers = async () => {
    const response = await fetch('api/users');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
}

const UserTable = () => getUsers

export default UserTable;