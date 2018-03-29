/**
 * Styles
 */
import "../scss/index.scss";

/**
 * Modules
 */
import { silcCoreInit } from 'silc-core';
import { silcAccordionInit } from 'silc-accordion';
import { silcNavInit } from 'silc-nav';
import { silcOffcanvasInit } from 'silc-offcanvas';
import { modalVideo } from '../components/modal-video/modal-video';

/**
 * Init
 */
silcCoreInit();
silcAccordionInit();
silcNavInit();
silcOffcanvasInit();
modalVideo();
