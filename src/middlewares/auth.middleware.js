import User from "#models/user";
import { verifyToken } from "#utils/jwt";
import httpStatus from "#utils/httpStatus";
import { session } from "#middlewares/session";
import asyncHandler from "#utils/asyncHandler";

export const ADMIN = "admin";

export async function authentication(req, res, next) {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return {
        status: false,
        httpStatus: httpStatus.UNAUTHORIZED,
        message: "Invalid token please login again",
      };
    }
    const payload = verifyToken(token);
    let user = await User.findById(payload.id)
    .populate("role", "name permissions")
    .select("name mobileNo email role profilePic mobileNo");
    if (!user) {
      return {
        status: false,
        httpStatus: httpStatus.UNAUTHORIZED,
        message: "User doesn't exist",
      };
    }
    user = user.toJSON();
    user.permissions = user.role.permissions;
    user.role = user.role;
    delete user.password;
    
    req.user = user;
    // session.set("user", user);
    // session.set("payload", payload);
    next();
  } catch (err) {
    next(err);
  }
}

export function authorization(role) {
  return asyncHandler(async function (req, _res, next) {
    const payload = session.get("user");
    if (payload.role === ADMIN) return next();
    // role = user
    if (role !== payload.role) {
      return {
        status: false,
        message: "Operation not permitted",
        httpStatus: httpStatus.FORBIDDEN,
      };
    }
    next();
  });
}

