import express from 'express';
import * as subjectController from '../subjects/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *         - teacher
 *         - alumni
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la asignatura
 *         teacher:
 *           type: string
 *           description: Nombre del profesor
 *         alumni:
 *           type: array
 *           items:
 *             type: string
 *           description: Array de IDs de los alumnos matriculados
 *       example:
 *         name: Cálculo
 *         teacher: Mr. Jägger
 *         alumni: ['a3f9c1d7e5b4820067de9ac4', 'a3f9c1d7e5b4820067de9ac5']
 */

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nueva asignatura
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       201:
 *         description: Asignatura creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       400:
 *         description: Datos incorrectos
 */
router.post('/subjects/', subjectController.createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Devuelve todas las asignaturas
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: Lista de todas las asignaturas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 */
router.get('/subjects/', subjectController.getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene una asignatura por ID
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asignatura
 *     responses:
 *       200:
 *         description: Detalles de la asignatura
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id', subjectController.getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza una asignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asignatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: Asignatura actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: Asignatura no encontrada
 */
router.put('/subjects/:id', subjectController.updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una asignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asignatura
 *     responses:
 *       204:
 *         description: Asignatura eliminada correctamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.delete('/subjects/:id', subjectController.deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}/alumni:
 *   get:
 *     summary: Obtiene todos los alumnos de una asignatura
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la asignatura
 *     responses:
 *       200:
 *         description: Lista de alumnos de la asignatura
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id/alumni', subjectController.getUsersInSubjectHandler);

export default router;