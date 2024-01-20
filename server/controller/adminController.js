const express = require('express')



const getAdmin = async (req,res) => {
    res.render('admin')
    };

const postAdmin = async (req,res) => {
    try {
        const appointmentRepository = getRepository(AppointmentInfo);
        const newAppointment = appointmentRepository.create({
          hospitalid: req.session.loginhid,
          doctor: req.body.doctor,
          specialist: req.body.specialist,
          cost: req.body.cost,
          yoe: req.body.yoe,
          bookingslot: req.body.bookingslot,
        });
    
        await appointmentRepository.save(newAppointment);
    
        req.flash('msg', 'Successfully Registered');
        res.redirect('/appointments');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    };

module.exports= {getAdmin,postAdmin}