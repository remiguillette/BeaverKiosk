import { QMainWindow, QWidget, QIcon } from "@nodegui/nodegui";
import path from "path";
import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "../renderer/App";

const win = new QMainWindow();
win.setWindowTitle("NodeGUI Démo");
win.resize(400, 300);

const centralWidget = new QWidget();
win.setCentralWidget(centralWidget);

Renderer.render(<App > centralWidget);

win.show();
(global as any).win = win; // Empêche le GC de fermer la fenêtre
