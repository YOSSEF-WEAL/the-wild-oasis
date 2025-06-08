import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password })
{
  const { data, error } = await supabase.auth.signUp({
    email, password, options: {
      data: {
        fullName,
        avatar: ''
      }
    }
  });

  if (error)
  {
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password })
{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error)
  {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser()
{
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error)
  {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout()
{
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar })
{
  // 1. Update password OR fullName
  let updateDate;
  if (password) updateDate = { password };
  if (fullName) updateDate = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateDate);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageErorr } = await supabase.storage.from('avatars').upload(fileName, avatar);
  if (storageErorr) throw new Error(storageErorr.message);

  // 3. Update avatar in user
  const { data: updateUserData, erorr: updateUserErorr } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
    }
  });

  if (updateUserErorr) throw new Error(updateUserErorr.message);

  return updateUserData;
}