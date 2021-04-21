const router = require("express").Router();
const express = require('express')

const { createStudent, getStudent, deleteStudent, updateEmployee } = require('../dao/students');

router.post("/students", createStudent);
router.get("/students", getStudent)
router.patch("/students/:id", updateStudent)
router.delete("/students/:id", deleteStudent)

module.exports=router;
