import Application from "#models/application";
import Service from "#services/base";

class ApplicationService extends Service {
  static Model = Application;
}

export default ApplicationService;
