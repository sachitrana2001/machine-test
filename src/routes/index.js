// import Login from "@/pages/Authentication/Login";
import DashBoard from "@/pages/DashBoard/DashBoard";
import RiutesDiv from "@/pages/RoutesDiv/RiutesDiv";
import RouteEdit from "@/pages/RoutesDiv/RouteEdit";
import RoutesMap from "@/pages/RoutesDiv/RoutesMap";
import TimeEdit from "@/pages/TimeTable/TimeEdit";
import TimeMap from "@/pages/TimeTable/TimeMap";
import TimeTable from "@/pages/TimeTable/TimeTable";

//Vehicles
import Vehicles from "@/pages/Vehicles/List";
import AddVehicles from "@/pages/Vehicles/Add_Vehicles/AddVehicles";
import VehicleMakeInsert from "@/pages/Vehicles/VehiclesMasters/VehicleMake/Insert";
import VehicleTypeInsert from "@/pages/Vehicles/VehiclesMasters/VehicleType/Insert";
import VehicleFabricatorInsert from "@/pages/Vehicles/VehiclesMasters/VehicleFabricator/Insert";
import BusOwnershipInsert from "@/pages/Vehicles/VehiclesMasters/BusOwnership/Insert";
import BusServiceTypeInsert from "@/pages/Vehicles/VehiclesMasters/BusServiceType/Insert";
import BusCategoryInsert from "@/pages/Vehicles/VehiclesMasters/BusCategory/Insert";
import VehicleChassisBodyTypeInsert from "@/pages/Vehicles/VehiclesMasters/VehicleChassisBodyType/Insert";
import VehicleModelEuroInsert from "@/pages/Vehicles/VehiclesMasters/VehicleModelEuro/Insert";
import BusServiceTypeListView from "@/pages/Vehicles/VehiclesMasters/BusServiceType/ListView";
import VehicleMakeListView from "@/pages/Vehicles/VehiclesMasters/VehicleMake/ListView";
import VehicleTypeListView from "@/pages/Vehicles/VehiclesMasters/VehicleType/ListView";
import VehicleTrimListView from "@/pages/Vehicles/VehiclesMasters/VehicleTrim/ListView";
import VehicleGroupListView from "@/pages/Vehicles/VehiclesMasters/VehicleGroup/ListView";
import VehicleFabricatorListView from "@/pages/Vehicles/VehiclesMasters/VehicleFabricator/ListView";
import VehicleFuelTypeListView from "@/pages/Vehicles/VehiclesMasters/VehicleFuelType/ListView";
import VehicleChassisBodyTypeListView from "@/pages/Vehicles/VehiclesMasters/VehicleChassisBodyType/ListView";
import VehicleModelEuroListView from "@/pages/Vehicles/VehiclesMasters/VehicleModelEuro/ListView";
import MasterSettings from "@/pages/Vehicles/VehiclesMasters/MasterSettings";

import PreviewVehicle from "@/pages/Vehicles/PreviewVehicle/PreviewVehicle";
import Login from "@/pages/Authentication/Login";

// chassisBodyTypeShortName
const protectedRoutes = [
  { path: "/", component: Vehicles },

  // //Vehicles
  { path: "/vehicles", component: Vehicles },
  { path: "/add-vehicles", component: AddVehicles },
  { path: "/vehicle-make-insert", component: VehicleMakeInsert },
  { path: "/vehicle-type-insert", component: VehicleTypeInsert },
  { path: "/bus-ownership-insert", component: BusOwnershipInsert },
  { path: "/vehicle-fabricator-insert", component: VehicleFabricatorInsert },
  { path: "/vehicle-preview", component: PreviewVehicle },
  { path: "/bus-service-type-insert", component: BusServiceTypeInsert },
  { path: "/bus-category-insert", component: BusCategoryInsert },
  {
    path: "/chassis-body-type-insert",
    component: VehicleChassisBodyTypeInsert,
  },
  { path: "/vehicle-model-euro-insert", component: VehicleModelEuroInsert },
  { path: "/service-type-list", component: BusServiceTypeListView },
  { path: "/make-list", component: VehicleMakeListView },
  { path: "/type-list", component: VehicleTypeListView },
  { path: "/trim-list", component: VehicleTrimListView },
  { path: "/group-list", component: VehicleGroupListView },
  { path: "/fabricator-list", component: VehicleFabricatorListView },
  { path: "/fuel-type-list", component: VehicleFuelTypeListView },
  { path: "/chassis-type-list", component: VehicleChassisBodyTypeListView },
  { path: "/model-euro-list", component: VehicleModelEuroListView },
  { path: "/master-settings", component: MasterSettings },

  { path: "/dashboard", component: DashBoard },
  { path: "/routesdiv", component: RiutesDiv },
  { path: "/createroute", component: RoutesMap },
  { path: "/routedit", component: RouteEdit },
  { path: "/timetable", component: TimeTable },
  { path: "/timeview", component: TimeMap },
  { path: "/timeedit", component: TimeEdit },
];
const publicRoutes = [{ path: "/", component: Login }];
export { protectedRoutes, publicRoutes };
