import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmpoyeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect()(EmployeeEdit);
