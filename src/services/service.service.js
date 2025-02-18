import Services from "#models/service";
import Service from "#services/base";

class ServiceService extends Service {
  static Model = Services;
}

export default ServiceService;
