import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NewsContext } from "../../../context/NewsListContext";
import NewsList from './NewsList';

function NewsHeader(props) {
    const { sources } = props;
    const newsContext = useContext(NewsContext);
    console.log(newsContext)
    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(!modalOpen)
    return (
        <>
            <Button onClick={handleModalOpen}>Select News </Button>
            <Dialog
                open={modalOpen}
                onClose={handleModalOpen}
            >
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <NewsList
                        sources={newsContext.sources}
                        setSelectedSource={newsContext.setSelectedSource}
                        setModalOpen={handleModalOpen}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewsHeader;
