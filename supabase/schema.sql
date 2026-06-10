create extension if not exists "uuid-ossp";

create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
    full_name text,
      email text,
        created_at timestamptz default now()
        );

        create table public.clients (
          id uuid default uuid_generate_v4() primary key,
            designer_id uuid references public.profiles(id) on delete cascade not null,
              name text not null,
                email text not null,
                  project_type text,
                    status text not null default 'pending_brief',
                      brief_token uuid default uuid_generate_v4() unique not null,
                        created_at timestamptz default now()
                        );

                        create table public.briefs (
                          id uuid default uuid_generate_v4() primary key,
                            client_id uuid references public.clients(id) on delete cascade not null,
                              project_type text,
                                description text,
                                  budget_range text,
                                    timeline text,
                                      pages text,
                                        has_branding boolean default false,
                                          branding_notes text,
                                            examples text,
                                              additional_info text,
                                                created_at timestamptz default now()
                                                );

                                                create table public.proposals (
                                                  id uuid default uuid_generate_v4() primary key,
                                                    client_id uuid references public.clients(id) on delete cascade not null,
                                                      title text not null,
                                                        overview text,
                                                          deliverables text,
                                                            price numeric not null,
                                                              currency text default 'USD',
                                                                timeline text,
                                                                  payment_terms text,
                                                                    status text not null default 'draft',
                                                                      proposal_token uuid default uuid_generate_v4() unique not null,
                                                                        approved_at timestamptz,
                                                                          created_at timestamptz default now()
                                                                          );

                                                                          alter table public.profiles enable row level security;
                                                                          alter table public.clients enable row level security;
                                                                          alter table public.briefs enable row level security;
                                                                          alter table public.proposals enable row level security;

                                                                          create policy "profiles: own" on public.profiles for all using (auth.uid() = id);

                                                                          create policy "clients: own" on public.clients for all using (auth.uid() = designer_id);

                                                                          create policy "briefs: designer read" on public.briefs for select using (
                                                                            exists (select 1 from public.clients where id = client_id and designer_id = auth.uid())
                                                                            );
                                                                            create policy "briefs: public insert" on public.briefs for insert with check (true);

                                                                            create policy "proposals: designer all" on public.proposals for all using (
                                                                              exists (select 1 from public.clients where id = client_id and designer_id = auth.uid())
                                                                              );
                                                                              create policy "proposals: public read" on public.proposals for select using (true);
                                                                              create policy "proposals: public update status" on public.proposals for update using (true) with check (true);

                                                                              create or replace function public.handle_new_user()
                                                                              returns trigger language plpgsql security definer set search_path = public as $$
                                                                              begin
                                                                                insert into public.profiles (id, full_name, email)
                                                                                  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
                                                                                    return new;
                                                                                    end;
                                                                                    $$;

                                                                                    create trigger on_auth_user_created
                                                                                      after insert on auth.users
                                                                                        for each row execute procedure public.handle_new_user();