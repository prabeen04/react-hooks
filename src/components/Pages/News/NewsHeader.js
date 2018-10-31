import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewsList from './NewsList';
import { news_api_url } from '../../../config';

function NewsHeader(props) {
    const [modalOpen, setModalOpen] = useState(false)
    const { classes } = props;
    const [sources, setSources] = useState([]);
    useEffect(() => {
        fetch(`${news_api_url}/sources`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSources(res.sources)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Button onClick={() => setModalOpen(!modalOpen)}>Select News </Button>
            <Dialog
                open={modalOpen}
                onClose={() => setModalOpen(!modalOpen)}
            >
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <NewsList sources={sources} />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewsHeader;
