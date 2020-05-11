import React, {Component} from 'react';
import {AppBar, Toolbar, Container, Grid, Box} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export class Footer extends Component {

    public render() {
        return (
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Box>2020 | Разработано и переведено в учебных целях</Box>
                            <Box>
                                <a href="https://github.com/vladislav1923" target="_blank">
                                    <GitHubIcon htmlColor="#fff"/>
                                </a>
                            </Box>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        )
    }

}
