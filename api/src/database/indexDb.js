import { admin_user_service } from "./services/admin_user_service.js";
import { professional_user_service } from "./services/professional_user_service.js";
import { avadible_module_service } from "./services/avadible_module_service.js";
export const admin_user_dao = new admin_user_service();
export const professional_user_dao = new professional_user_service();
export const avadible_module_dao = new avadible_module_service();