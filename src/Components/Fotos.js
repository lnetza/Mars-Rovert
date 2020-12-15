import React,{useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 750,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Fotos = ({informacion}) => {
    //extraer la data
    const {sol,camera,img_src,earth_date,rover}=informacion;

    //Configuracion del modal de materialize
    const [modalStyle] = useState(getModalStyle);
    const [open,setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }

    return ( 

        <div className="galeria">
                <div className="col s3 m3">
                    <img className="responsive-img materialboxed" src={img_src} />
                    
                    <span className="card-title">{camera.full_name}</span>
                    <p>Sol Marciano:{sol}</p>
                    <span className="card-title">Fecha en tierra: {earth_date}</span>
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() =>{
                            handleOpen();
                        }}
                    >
                        Ver imagen
                    </button>
                    <p>Rover:{rover.name}</p>
                    
                    <Modal
                        open={open}
                        onClose={()=>{
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <img className="responsive-img materialboxed" src={img_src} />
                        </div>
                    </Modal>
                </div>
        </div>
     );
}
 
export default Fotos;

