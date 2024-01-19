const express = require("express");
const router = express.Router;
const studentsCard = require("../models/reportcardSchema");

const getAllStudents = async (req, res) => {
  try {
    const users = await studentsCard.find();
    if (!users) res.status(204).json({ message: "No students found" });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const getStudent = async (req, res) => {
  try {
    const users = await studentsCard.findById(req.params.id);
    if (!users) res.status(204).json({ message: "No students found" });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const addStudents = async (req, res) => {
  try {
    const {
      studentName,
      rollNo,
      maths,
      physics,
      chemistry,
      biology,
      english,
      hindi,
    } = req.body;
    if (!studentName) return res.status(400).json({ error: "No student name" });

    const student = await studentsCard.create({
      studentName,
      rollNo,
      maths,
      physics,
      chemistry,
      biology,
      english,
      hindi,
    });
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).json({ error: "no id sent" });
    const {
      studentName,
      rollNo,
      maths,
      physics,
      chemistry,
      biology,
      english,
      hindi,
    } = req.body;
    if (!studentName) return res.status(400).json({ error: "No student name" });

    const student = await studentsCard.findByIdAndUpdate(req.params.id, {
      studentName,
      rollNo,
      maths,
      physics,
      chemistry,
      biology,
      english,
      hindi,
    });
    if (!student)
      return res.status(400).json({ error: "No user with id found" });
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentsCard.findByIdAndDelete(req.params.id);
    if (!student)
      return res.status(400).json({ error: "No student with id found" });
    res.status(201).json(`student with id${req.params.id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server error" });
  }
};
module.exports = { getAllStudents, addStudents, updateStudent, deleteStudent };
